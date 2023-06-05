
export const calcTotalJob = (arr, label, title) => {
   return arr?.filter((job) => job[label] === title).length
}