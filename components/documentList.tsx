import DocumentRow from "./documentRow";

const DocumentList = ({ documents }) => {
    return (
      <div className="bg-white">
        {documents.map((doc, index) => (
          <DocumentRow key={index} document={doc} />
        ))}
      </div>
    );
  };

  export default DocumentList;