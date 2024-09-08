import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa'; 

const Tablelisting =  React.memo(({ columns,data, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
      <tr>
          {columns?.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
          {onEdit || onDelete ? <th>Actions</th> : null}
        </tr>
      </thead>
      <tbody>
        {data?.map((post) => (
          <tr key={post?.id}>
            <td>{post?.title}</td>
            <td>{post?.author}</td>
            <td>
              <Button 
                variant="outline-primary" 
                onClick={() => onEdit(post?.id)}
                className="me-2"
              >
                <FaEdit />
              </Button>
              <Button 
                variant="outline-danger" 
                onClick={() => onDelete(post?.id)}
              >
                <FaTrash />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});

export default Tablelisting;

