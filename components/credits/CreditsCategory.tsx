"use state"
import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";

type credit = {
  creditTitle: string,
  creditRole: string,
  creditPub: string,
}

type Props = {
  creditsType: string,
  credits: credit[],
}

export default function CreditsCategory({ credits, creditsType }: Props) {
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = credits.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(credits.length / itemsPerPage);

  return (
    <>
      <div>
        <h2 className='text-2xl font-semibold uppercase'>{creditsType}</h2>
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Title</TableColumn>
            <TableColumn>Role</TableColumn>
            <TableColumn>Publisher</TableColumn>
          </TableHeader>
          <TableBody>
            {currentItems.map((credit: any) => (
              <TableRow key={credit.index}>
                <TableCell>{credit.creditTitle}</TableCell>
                <TableCell>{credit.creditRole}</TableCell>
                <TableCell>{credit.creditPub}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination total={totalPages} initialPage={currentPage} onChange={setCurrentPage} />
      </div >
    </>
  )
}
