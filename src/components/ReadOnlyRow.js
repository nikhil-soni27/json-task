import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick }) => {
  return (
    <tr>
      <td class="py-2 px-4">{contact.name}</td>
      <td class="py-2 px-4">{contact.username}</td>
      <td class="py-2 px-4">{contact.email}</td>
      <td class="py-2 px-4">{contact.phone}</td>
      <td class="py-2 px-4">{contact.website}</td>
      <td class="py-2 px-4">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
