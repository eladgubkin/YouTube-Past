import _ from "lodash";

export const readFile = (file, setState, parser) => {
  if (!_.isEmpty(file)) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setState({
        fileName: file.name,
        fileSize: file.size,
        lastModifiedDate: file.lastModifiedDate,
        fileContent: parser(reader.result),
      });
    };
  } else {
    console.log("Choose only 1 file");
  }
};
