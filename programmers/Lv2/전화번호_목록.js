function solution(phone_book) {
  var answer = true;
  let sortedPhoneBook = phone_book.sort();

  for (let i = 0; i < sortedPhoneBook.length; i++) {
    const nextPhoneBook = sortedPhoneBook[i + 1];
    const currentPhoneBook = sortedPhoneBook[i];

    if (nextPhoneBook !== undefined) {
      answer = nextPhoneBook
        .slice(0, currentPhoneBook.length)
        .includes(currentPhoneBook)
        ? false
        : true;

      if (!answer) {
        break;
      }
    }
  }

  return answer;
}
