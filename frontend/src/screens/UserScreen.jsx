import React, { useRef } from 'react'
import { Box, Button, Chip } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

import Header from '../components/Header'
import { useState } from 'react'
import { GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid'

import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deletePostAdmin, getUserPosts } from '../actions/postActions'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { getAllUsers } from '../actions/userActions'

const UserProfileScreen = () => {
  // hook to track of the selected rows of the data grid
  const [selectionModel, setSelectionModel] = useState([])
  //creating instance of queryClient
  const queryClient = useQueryClient()
  // Hook to navigate between routes
  const navigate = useNavigate()
  //hook for track of userInfo
  const user = useRef()
  user.current = queryClient.getQueryData('userInfo')
 
  // Query hook to get the  posts belongs to user
  const {
    isLoading,
    isError,
    error,
    data: users,
  } = useQuery('userPost', getAllUsers)


 




  let content
  if (isLoading) {
    return <p>Loading</p>
  } else if (isError) {
    return <p>{error.message}</p>
  } else {
    content = users
  }

console.log(users)

   //data grid columns
  const columns = [
    {
      field: 'id',
      headerName: 'Post ID',
      flex: 1,
    },

    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },

    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
        //render custom coloumn based on the cell value
    {
      field: 'role',
      headerName: 'Role',
      width: 150,
      renderCell: (params) =>
        params.value === true ? (
          <Chip label='Admin' color='error' size='small' variant='outlined' />
        ) :  (
          <Chip
            label='Worker'
            color='success'
            size='small'
            variant='outlined'
          />
    
        ),
    },

  ]

    //generating datagrid rows with query data
  let rows = content?.map((content, index) => ({
    id: content._id,
    name: content.name,
    email: content.email,
    role : content.isAdmin,
  
  }))

  //using custom toolbar component of datagrid to add custom function to the data grid
  

  return (
    <Box m='20px'>
      <Header title='USER LIST'  />
{/* data grid styles */}
      <Box
        m='40px 0 0 0'
        height='60vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: 'none',
            background: '#757de8',
            color: '#fff',
          },
          '& .MuiDataGrid-virtualScroller': {},
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
          },
        }}
      >
          {/* data grid */}
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          pageSize={8}
          onSelectionModelChange={(selection) => {
            setSelectionModel(selection)
          }}
          
        />
      </Box>
    </Box>
  )
}

export default UserProfileScreen
