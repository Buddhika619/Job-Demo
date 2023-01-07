import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

import DialogTitle from '@mui/material/DialogTitle'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import { Autocomplete, Box, TextField, TextareaAutosize } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../actions/postActions'
import axios from 'axios'

export default function PostModel({ handleClose, open }) {
  const [keyword, setKeyword] = useState('')
  // Hook to navigate between routes
  const navigate = useNavigate()

  // Hook to access the query client to invalidate queries
  const queryClient = useQueryClient()

  // Get the user info from the cache
  const userInfo = queryClient.getQueryData(['userInfo'])

  // Hook to handle form state and validation - react form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      text: '',
      image: '',
    },
  })

  // Hook to handle the create post mutation
  const postCreateMutation = useMutation(createPost, {
    onSuccess: () => {
      // Invalidate the publicPost query to refresh the data
      queryClient.invalidateQueries('publicPost')

      if (userInfo.isAdmin) {
        toast.success('Post submitted!')
      } else {
        toast.success('post send for admin approval')
      }
      navigate('/home')
    },

    onError: (error) => {
      toast.error(error.response.data)
    },
  })

  // Function to handle form submission
  const onSubmit = (data) => {
    const file = data.image[0]

    const formData = new FormData()
    formData.append('image', file)
    formData.append('title', data.title)
    formData.append('text', data.text)
    formData.append('worker', data.worker)

    postCreateMutation.mutate(formData)
    reset()
  }

  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0]
  //   const formData = new FormData()
  //   formData.append('image', file)

  //   try {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     }

  //     const { data } = await axios.post('/api/upload', formData, config)

  //       console.log('data')
  //   } catch (error) {
  //     toast.error('Image upload Failed')

  //   }
  // }

  return (
    <Box color='blue'>
      <Dialog
       sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            height: "600px",
            
          },
        },
      }}
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Create A Post</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
          
              display='grid'
              justifyContent='center'
              alignItems='center'
            >
              <TextField
                type='text'
                label='Title'
                style={{ fontSize: '0.1rem', paddingBottom:'20px' }}
                {...register('title', { required: true })}
              />

              {errors.title && errors.title.type === 'required' && (
                <p>This is required</p>
              )}

              {errors.title && errors.title.type === 'maxLength' && (
                <p>Max length exceeded</p>
              )}

              <TextField
                type='text'
                label='Worker ID'
                style={{ fontSize: '0.1rem',paddingBottom:'20px'  }}
                {...register('worker', { required: true })}
              />

              {errors.worker && errors.worker.type === 'required' && (
                <p>This is required</p>
              )}

              <TextField
                type='file'
                label='image'
                style={{ fontSize: '0.1rem',paddingBottom:'20px' }}
                {...register('image', { required: true })}
              />

              {errors.image && errors.image.type === 'required' && (
                <p>Required</p>
              )}

              <TextareaAutosize
                maxRows={10}
                variant='filled'
                aria-label='maximum height'
                placeholder='Post Body'
                style={{ width: 500, height: 150, fontSize: '1rem' }}
                {...register('text', { required: true })}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            >
              <Button type='submit' variant='contained' sx={{ px: 5, margin:'20px' }}>
                Submit
              </Button>
            </Box>
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant='text' onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
