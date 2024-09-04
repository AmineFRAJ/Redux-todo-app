import { EditOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useDispatch } from "react-redux";
import { edittask } from "../JS/Actions";

const EditTask = ({ task }) => {
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleSaveChanges = () => {
    dispatch(edittask(task.id, newName, newDescription));
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Edit" placement="bottom">
        <button
          onClick={() => {
            if (!task.isDone) {
              setOpen(true);
            } else {
              alert("You cannot edit a completed task.");
            }
          }}
          className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <EditOutlined />
        </button>
      </Tooltip>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-400 sm:mx-0 sm:h-10 sm:w-10">
                    <EditOutlined
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Edit Task
                    </DialogTitle>
                    <div className="mt-2">
                      <input
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        type="text"
                        required
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                      />
                      <textarea
                        className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => handleSaveChanges()}
                  className="inline-flex w-full justify-center rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 sm:ml-3 sm:w-auto"
                >
                  Save Cahnges
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default EditTask;
