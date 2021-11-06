import React from "react";
import Dropzone from "react-dropzone";

export const Card = ({ cardHeader, cardTitle, setState, parser }) => {
  return (
    <div
      className="shadow-md rounded-md overflow-hidden text-center"
      style={{ width: 350 }}
    >
      <div className="py-3 px-5 bg-gray-100">{cardHeader}</div>

      <div className="p-5">
        <h5 className="text-xl font-semibold mb-2">{cardTitle}</h5>

        <Dropzone
          onDrop={(file) => parser(file[0], setState)}
          maxFiles={1}
          accept=".json"
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <button className=" bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  Upload File
                </button>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    </div>
  );
};
