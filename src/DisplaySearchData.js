import React from "react";

const DisplaySearchData = ({ filteredData }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th class="py-3 px-6">Name</th>
          <th class="py-3 px-6">Username</th>
          <th class="py-3 px-6">Email</th>
          <th class="py-3 px-6">Phone</th>
          <th class="py-3 px-6">Website</th>
        </tr>
      </thead>
      {filteredData.map((value) => (
        <>
          <tbody>
            <tr>
              <td class="py-2 px-4">{value.name}</td>
              <td class="py-2 px-4">{value.username}</td>
              <td class="py-2 px-4">{value.email}</td>
              <td class="py-2 px-4">{value.phone}</td>
              <td class="py-2 px-4">{value.website}</td>
            </tr>
          </tbody>
        </>
      ))}
    </table>
  );
};

export default DisplaySearchData;
