"use client"
import React from 'react'
import { content } from '@/data/content';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";


type Props = {}



export default function PortfolioGrid({ }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentPage, setCurrentPage] = React.useState(1);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(content.length / cardsPerPage);
  const indexOfFirstCard = (currentPage - 1) * cardsPerPage;
  const cardsOnCurrentPage = content.slice(indexOfFirstCard, indexOfFirstCard + cardsPerPage);
  const [selectedImage, setSelectedImage] = React.useState('');

  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 w-full">
        {cardsOnCurrentPage.map((asset, index) => (
          <Card shadow="sm" key={index} isPressable onPress={() => {
            setSelectedImage(asset.url);
            onOpen();
          }}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="md"
                width="100%"
                alt={asset.media}
                className="w-full object-cover object-center h-[250px]"
                src={asset.url}
              />
            </CardBody>
          </Card>
        ))}
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt="Selected image"
                    width="100%"
                    height="auto"
                  />
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Pagination total={totalPages} initialPage={1} onChange={setCurrentPage} />
    </>
  )
}
