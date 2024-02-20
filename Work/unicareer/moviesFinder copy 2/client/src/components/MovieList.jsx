import React from 'react'

const MovieList = () => {
  return (
    <div className='list-group'>
      <table className="table table-hover">
        <thead className="table-info">
            <tr className="bg-primary">
                <th scope='col'>Movie Name</th>
                <th scope='col'>Studio</th>
                <th scope='col'>Ratings</th>
                <th scope='col'>Edit</th>
                <th scope='col'>Delete</th>
            </tr>
        </thead>
        <tbody className="table-success">
            <tr>
                <td>ANT MAN</td>
                <td>dc</td>
                <td>3</td>
                <td><button className="btn btn-warning">Update</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MovieList
