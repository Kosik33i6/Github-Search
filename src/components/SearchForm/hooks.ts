export const useFormSubmit = (fetchData: any) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData();
  };

  return { handleSubmit };
};
