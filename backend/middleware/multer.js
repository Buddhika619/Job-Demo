// import multer from 'multer';

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.originalname);
//     },
//   });
  
// export const upload = multer({ storage });

// // Define the fileUploadMiddleware function
// export function fileUploadMiddleware() {
//     // Create a multer middleware instance
//     return multer({
//       // Specify the storage location for the uploaded files
//       storage: multer.diskStorage({}),
//       // Define a fileFilter function to filter the uploaded files by file type
//       fileFilter: (req, file, cb) => {
//         // Get the file extension of the uploaded file
//         let ext = path.extname(file.originalname);
//         // Allow only files with the extensions '.jpg', '.jpeg', and '.png'
//         if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
//           // Return an error if the file type is not supported
//           cb(new Error('File type is not supported'), false);
//           return;
//         }
//         // Allow the file if it has a supported file type
//         cb(null, true);
//       },
//     });
//   }


import multer from 'multer';
import path from 'path';

export function fileUploadMiddleware() {
  return multer({
    storage: multer.diskStorage({
      filename: (req, file, cb) => {
        // Generate a unique file name
        const newFilename = `${Date.now()}${path.extname(file.originalname)}`;
        // Call the callback with the new file name
        cb(null, newFilename);
      },
    }),
    fileFilter: (req, file, cb) => {
      let ext = path.extname(file.originalname);
      if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
        cb(new Error('File type is not supported'), false);
        return;
      }
      cb(null, true);
    },
  });
}
