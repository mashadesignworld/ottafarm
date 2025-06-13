const Table = () => {
  return (
    <table className="w-full mt-4">
      <thead className="text-left text-sm  bg-gray-100">
        <tr>
          <th>Info</th>
          <th>Employee Id </th>
          <th>Designation</th>
           <th>Mobile</th>
           <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
          <td>Row 1, Cell 3</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
          <td>Row 2, Cell 3</td>
        </tr>
      </tbody>
    </table>
  );
}
export default Table;