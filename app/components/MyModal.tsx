import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export default function MyModal(props: any) {
  let info = props.info;

  return (
    <Modal
      backdrop="blur"
      isOpen={props.isOpen}
      onClose={props.onClose}
      radius="none"
      classNames={{
        base: "border border-line",
        header: "display text-xl text-ink",
        body: "text-ink-soft",
      }}
    >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">
            {info["heading"]}
          </ModalHeader>
          <ModalBody>
            <p className="text-sm leading-relaxed">{info["text"]}</p>
          </ModalBody>
          <ModalFooter>
            <Button
              radius="full"
              onClick={props.onClose}
              className="bg-accent px-6 text-xs font-semibold uppercase tracking-[0.14em] text-white"
            >
              Close
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
