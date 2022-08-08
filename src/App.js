import React, { useState, Fragment } from "react";
import data from "./users_nikhil.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import DisplaySearchData from "./DisplaySearchData";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [searchInfo, setSearchInfo] = useState("");
  const [showData, setShowData] = useState(false);
  const [showData2, setShowData2] = useState(true);
  const [showLoginBtn, setShowLoginBtn] = useState(true);

  const filteredData = data.filter((person) => {
    return person.name.toLowerCase().startsWith(searchInfo.toLowerCase());
  });

  const submitData = (e) => {
    setShowData(true);
    setShowData2(false);
    console.log("working");
  };

  const handleChange = (e) => {
    setSearchInfo(e.target.value);
    setShowLoginBtn(false);
    if (e.target.value === "") {
      setShowData(false);
      setShowData2(true);
    }
  };

  const [editFormData, setEditFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      username: editFormData.username,
      email: editFormData.email,
      phone: editFormData.phone,
      website: editFormData.website,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      username: contact.username,
      website: contact.website,
      email: contact.email,
      phone: contact.phone,
    };

    setEditFormData(formValues);
  };

  return (
    <div className="app-container">
      <div className="p-4 flex justify-center	items-center gap-4">
        <input
          type="text"
          value={searchInfo}
          required="required"
          placeholder="Search here..."
          className=" block p-2 pl-7 w-2/5 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChange}
        ></input>
        <button
          className="btn inline-block px-6 py-2 border-2 rounded-md border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          onClick={submitData}
          disabled={!searchInfo}
        >
          Search
        </button>
      </div>
      {showData && <DisplaySearchData filteredData={filteredData} />}
      {showData2 && (
        <form onSubmit={handleEditFormSubmit}>
          <div class="shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th class="py-3 px-6">Name</th>
                  <th class="py-3 px-6">Username</th>
                  <th class="py-3 px-6">Email</th>
                  <th class="py-3 px-6">Phone</th>
                  <th class="py-3 px-6">Website</th>
                  <th class="py-3 px-6">Update</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <>
                    {editContactId === contact.id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                      />
                    ) : (
                      <ReadOnlyRow
                        contact={contact}
                        handleEditClick={handleEditClick}
                      />
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </form>
      )}
    </div>
  );
};

export default App;
