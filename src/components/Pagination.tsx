"use client";
import {translate} from "@/helpers/translate";
import React, {useState} from "react";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {twMerge} from "tailwind-merge";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  className,
}) => {
  const [pageRange] = useState(3); // Number of visible page buttons

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return; // Prevent invalid page navigation
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
    let endPage = Math.min(totalPages, startPage + pageRange - 1);

    if (endPage - startPage + 1 < pageRange) {
      startPage = Math.max(1, endPage - pageRange + 1);
    }

    // Render "Previous" button
    pages.push(
      <button
        key='prev'
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center gap-2 px-3 py-1 text-colors-grey-colors-900 ${
          currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-200"
        }`}
      >
        <FiChevronLeft className='size-[1.3rem]' />
        {translate("common.previous")}
      </button>
    );

    // Render first page and ellipsis if needed
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`rounded-md px-3 py-1 text-colors-grey-colors-900${
            currentPage === 1
              ? "bg-colors-primary-colors-400 text-white"
              : "hover:bg-colors-primary-colors-100"
          }`}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(<span key='ellipsis-start'>...</span>);
      }
    }

    // Render page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`rounded-md px-3 py-1 text-colors-grey-colors-900 ${
            currentPage === i
              ? "bg-colors-primary-colors-400 text-white"
              : "hover:bg-colors-primary-colors-100"
          }`}
        >
          {i}
        </button>
      );
    }

    // Render last page and ellipsis if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<span key='ellipsis-end'>...</span>);
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`rounded-md px-3 py-1 text-colors-grey-colors-900 ${
            currentPage === totalPages
              ? "bg-colors-primary-colors-400 text-white"
              : "hover:bg-colors-primary-colors-100"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    // Render "Next" button
    pages.push(
      <button
        key='next'
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-2 rounded-md px-2 py-1 text-colors-grey-colors-900 ${
          currentPage === totalPages
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-colors-primary-colors-100"
        }`}
      >
        {translate("common.next")}

        <FiChevronRight className='size-[1.3rem]' />
      </button>
    );

    return pages;
  };

  return (
    <div className={twMerge("flex items-center justify-center", className)}>
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination;
