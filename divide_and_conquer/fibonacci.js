function fibonacci(nbr) {
  if (nbr < 2) {
    return nbr;
  }
  return fibonacci(nbr - 1) + fibonacci(nbr - 2);
}
