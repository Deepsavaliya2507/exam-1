import React from 'react'

const Data = () => {

  const studentslist = [
    {
      id: 1,
      name: 'John',
      age: 21,
      grade: 'A',
      gender: 'Male'
    },

    {
      id: 2,
      name: 'Jane',
      age: 20,
      grade: 'B',
      gender: 'Female'
    },

    {
      id: 3,
      name: 'Bob',
      age: 22,
      grade: 'C',
      gender: 'Male'
    },

    {
      id: 4,
      name: 'Sara',
      age: 19,
      grade: 'A',
      gender: 'Female'
    },

    {
      id: 5,
      name: 'Tom',
      age: 21,
      grade: 'B',
      gender: 'Male'
    },

    {
      id: 6,
      name: 'Ava',
      age: 20,
      grade: 'A',
      gender: 'Female'
    },

    {
      id: 7,
      name: 'Mike',
      age: 22,
      grade: 'C',
      gender: 'Male'
    },

    {
      id: 8,
      name: 'Emily',
      age: 19,
      grade: 'B',
      gender: 'Female'
    },

    {
      id: 9,
      name: 'David',
      age: 21,
      grade: 'A',
      gender: 'Male'
    },

    {
      id: 10,
      name: 'Rachel',
      age: 20,
      grade: 'B',
      gender: 'Female'
    },

    {
      id: 11,
      name: 'Chris',
      age: 22,
      grade: 'C',
      gender: 'Male'
    },

    {
      id: 12,
      name: 'Lily',
      age: 19,
      grade: 'A',
      gender: 'Female'
    },

    {
      id: 13,
      name: 'Mark',
      age: 21,
      grade: 'B',
      gender: 'Male'
    },

    {
      id: 14,
      name: 'Sophie',
      age: 20,
      grade: 'A',
      gender: 'Female'
    },

    {
      id: 15,
      name: 'Tim',
      age: 22,
      grade: 'C',
      gender: 'Male'
    },

    {
      id: 16,
      name: 'Anna',
      age: 19,
      grade: 'B',
      gender: 'Female'
    },

    {
      id: 17,
      name: 'Jack',
      age: 21,
      grade: 'A',
      gender: 'Male'
    },

    {
      id: 18,
      name: 'Olivia',
      age: 20,
      grade: 'B',
      gender: 'Female'
    },

    {
      id: 19,
      name: 'Kevin',
      age: 22,
      grade: 'C',
      gender: 'Male'
    },

    {
      id: 20,
      name: 'Mia',
      age: 19,
      grade: 'A',
      gender: 'Female'
    }
  ];

  const fil = studentslist.filter(j => j.gender == 'Female');

  const total = fil.reduce((acc, curr) => {
    return acc + (curr.age)
  }, 0)

  const total1 = fil.reduce((acc, curr) => {
    return acc + (curr.age / 20)
  }, 0)

  const total2 = fil.reduce((acc, curr) => {
    return acc + (curr.age / 10)
  }, 0)

  return (
    <div>
      <center>
        <h1>Student List</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {
              fil.map((i, index) => {
                return (
                  <tr>
                    <td>{i?.id}</td>
                    <td>{i?.name}</td>
                    <td>{i?.age}</td>
                    <td>{i?.grade}</td>
                    <td>{i?.gender}</td>
                  </tr>
                )
              })
            }
            <tr border={1}>
              <td>Total :-</td>

              <td>{total}</td>
              <td>{total1}</td>
              <p colSpan={2}>Divide By 20</p>
            </tr>
            <tr>
              <td>Total :-</td>
              <td>{total}</td>
              <td>{total2}</td>
              <p colSpan={2}>Divide By 10</p>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  )
}

export default Data
