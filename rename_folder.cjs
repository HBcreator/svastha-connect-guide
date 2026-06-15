const fs = require('fs');

try {
  fs.renameSync('public/TOP cneters', 'public/TOP centers');
  console.log('Folder renamed successfully.');
} catch (error) {
  console.error('Error renaming folder:', error.message);
}
