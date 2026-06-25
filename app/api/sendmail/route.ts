import type { NextRequest, NextResponse } from "next/server";
const mgKey = process.env.MAILGUN_API_KEY;
const domainKey = process.env.MAILGUN_DOMAIN_KEY;
const DOMAIN = "mail.bluehutsolutions.ca";

interface Form {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  let data = await req.json();

  const deets = {
    from: "Bluehut App <postmaster@mail.bluehutsolutions.ca>",
    to: "bluehutsolutions@gmail.com",
    subject: `Message from [${data.firstName} ${data.lastName}] on the BlueHut App`,
    text: `${data.message}`,
    html: `<h1>${data.message}<br></br><br></br><br></br>   From: ${data.email}</h1>`,
  };

  let form = new FormData();

  for (let [key, value] of Object.entries(deets)) {
    form.append(key, value);
  }
  console.log(form);

  let config = {
    method: "POST",
    headers: {
      // Accept: "multipart/form-data",
      // "Content-Type": "multipart/form-data",
      Authorization: "Basic " + Buffer.from(`api:${mgKey}`).toString("base64"),
    },
    body: form,
  };

  try {
    let request = await fetch(
      `https://api.mailgun.net/v3/${DOMAIN}/messages`,
      config
    );
    let response = await request.text();
    if (request.status <= 201) {
      console.log("sent", response);
    } else {
      console.log(request.status, response);
      throw new Error("Message not sent");
    }
    return Response.json(response);
  } catch (e) {
    console.log(e, "not sent");
    return new Response("error", { status: 500 });
  }
}
