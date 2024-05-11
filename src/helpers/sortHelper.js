export function sortUsers(selectedSort, users) {
  console.log('was sorted')
  if (selectedSort === "id") {
    return users
  }
  let sortedUsers = [...users].sort((a, b) => {
    if (selectedSort === 'ascend') {
      return a.id - b.id
    } else if (selectedSort === 'descend') {
      return b.id - a.id
    }
  })
  return sortedUsers
}
export function filterUsers(filter, users) {
  console.log('was filtered')
  if (filter === "") {
    return users 
  }
  let filteredUsers = [...users].filter((user) => {
    return ( user.username.toLowerCase().includes(filter.toLowerCase()) )
  })
  return filteredUsers
}