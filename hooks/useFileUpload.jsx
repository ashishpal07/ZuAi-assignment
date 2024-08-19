import { useState, useEffect, useCallback } from 'react'
import { useStore } from '@/store/store'
import { useDropzone } from 'react-dropzone'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export const useFileUpload = () => {
  const addFile = useStore(state => state.addFile)
  const [courseworkType, setCourseworkType] = useState('')
  const [subject, setSubject] = useState('')
  const [title, setTitle] = useState('')
  const [fileData, setFileData] = useState(null)
  const [isDragActive, setIsDragActive] = useState(false)
  const router = useRouter()

  const onDrop = useCallback(acceptedFiles => {
    setIsDragActive(false)
    acceptedFiles.forEach(file => {

      if (file.type !== 'application/pdf') {
        toast.error('Only PDF files are allowed.', {
          position: 'top-center',
        });
        return;
      }

      if (file.size > 25 * 1024 * 1024) {
        toast.info('File size is greater than 25 MB', {
          position: 'top-center'
        })
        return
      }

      const metadata = {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified
      }

      setFileData(metadata)
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
    accept: 'application/pdf'
  })

  const handleSubmit = () => {
    if (!fileData || !courseworkType || !subject || !title) {
      toast.info('Please fill all the details!', {
        position: 'top-center'
      })
      return
    }

    const completeFileData = {
      ...fileData,
      courseworkDetails: {
        courseworkType,
        subject,
        title
      }
    }

    addFile(completeFileData)
    saveFileMetadataToLocalStorage(completeFileData)
    resetForm()
  }

  const saveFileMetadataToLocalStorage = fileMetadata => {
    try {
      let storedFiles = JSON.parse(localStorage.getItem('files')) || []
      storedFiles.push(fileMetadata)
      localStorage.setItem('files', JSON.stringify(storedFiles))
      toast.success('File metadata saved successfully', {
        position: 'top-center'
      })
      router.push("/evaluate")
    } catch (e) {
      console.error('Error while saving file metadata to localStorage', e)
      toast.error('Error while saving file metadata to localStorage', {
        position: 'top-center'
      })
    }
  }

  useEffect(() => {
    try {
      const storedFiles = JSON.parse(localStorage.getItem('files')) || []
      storedFiles.forEach(file => {
        const fileExists = useStore
          .getState()
          .files.some(storedFile => storedFile.name === file.name)
        if (!fileExists) {
          addFile(file)
        }
      })
    } catch (e) {
      console.error('Error loading from localStorage', e)
      toast.error('Error while loading from localStorage', {
        position: 'top-center'
      })
    }
  }, [addFile])

  const resetForm = () => {
    setCourseworkType('')
    setSubject('')
    setTitle('')
    setFileData(null)
  }

  return {
    courseworkType,
    setCourseworkType,
    subject,
    setSubject,
    title,
    setTitle,
    getRootProps,
    getInputProps,
    fileData,
    setFileData,
    isDragActive,
    onDrop,
    handleSubmit
  }
}
