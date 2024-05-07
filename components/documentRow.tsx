
const DocumentRow = ({ document }: {}) => {
    return (
      <div className="flex items-center p-4 border-b border-gray-300">
        <input type="checkbox" className="mr-4" />
        <div className="flex-grow">{document.name}</div>
        <div>{document.sender}</div>
        <div>{document.dateAdded}</div>
        <div>{document.size || '--'}</div>
      </div>
    );
  };

  export default DocumentRow;
  