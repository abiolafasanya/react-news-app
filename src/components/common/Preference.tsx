import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { usePreferencesMutation } from "../../store/slices/userSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { authState } from "../../types";

const UserPreferenceComponent: React.FC = () => {
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const categoriesRef = useRef<HTMLDetailsElement>(null);
  const sourcesRef = useRef<HTMLDetailsElement>(null);
  const authoursRef = useRef<HTMLDetailsElement>(null);
  const [preferences, { isSuccess, isError }] = usePreferencesMutation();
  const auth = useSelector((state: authState) => state.auth);

  useEffect(() => {
    if (sourcesRef.current) {
      sourcesRef.current.open = true;
    }
  }, []);

  const availableSources: string[] = ["newsapi", "guardians", "nytimes"];
  const availableCategories: string[] = [
    "politics",
    "sports",
    "business",
    "tech",
  ];
  const availableAuthors: string[] = [
    "Neil Patel",
    "Mark Manson",
    "Brian Dean",
    "Rand Fishkin",
    "Gary Vaynerchuk",
  ];

  const handleSourceSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedSource = e.target.value;
    if (selectedSources.includes(selectedSource)) {
      setSelectedSources(
        selectedSources.filter((source) => source !== selectedSource)
      );
    } else {
      setSelectedSources([...selectedSources, selectedSource]);
    }
  };

  const handleCategorySelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = e.target.value;
    if (selectedCategories.includes(selectedCategory)) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== selectedCategory)
      );
    } else {
      setSelectedCategories([...selectedCategories, selectedCategory]);
    }
  };

  const handleAuthorSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedAuthor = e.target.value;
    if (selectedAuthors.includes(selectedAuthor)) {
      setSelectedAuthors(
        selectedAuthors.filter((author) => author !== selectedAuthor)
      );
    } else {
      setSelectedAuthors([...selectedAuthors, selectedAuthor]);
    }
  };

  const handleSavePreferences = async () => {
    await preferences({
      sources: selectedSources,
      categories: selectedCategories,
      authors: selectedAuthors,
    }).unwrap();
    if (isSuccess) {
      toast.success("Preference Updated");
    }
    if (isError) {
      toast.error("Preference Encountered error");
    }
  };

  return (
    <section className="border mt-5 mr-5 border-rounded-md shadow-sm px-5 py-5 lg:min-h-[400px] min-w-[280px]">
      <details
        ref={sourcesRef}
        className="transition-opacity duration-500 ease-in-out"
      >
        <summary className="font-semibold mb-4">Category</summary>
        {availableSources.map((source) => (
          <label key={source} className="flex items-center mb-2">
            <input
              type="checkbox"
              value={source}
              checked={selectedSources.includes(source)}
              onChange={handleSourceSelection}
              className="mr-2"
            />
            {source}
          </label>
        ))}
      </details>

      <details
        ref={categoriesRef}
        className="transition-opacity duration-500 ease-in-out"
      >
        <summary className="font-semibold mb-4">Sources</summary>
        {availableCategories.map((category) => (
          <label key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={handleCategorySelection}
              className="mr-2"
            />
            {category}
          </label>
        ))}
      </details>

      <details
        ref={authoursRef}
        className="transition-opacity duration-500 ease-in-out"
      >
        <summary className="font-semibold mb-4">Authours</summary>
        {availableAuthors.map((author) => (
          <label key={author} className="flex items-center mb-2">
            <input
              type="checkbox"
              value={author}
              checked={selectedAuthors.includes(author)}
              onChange={handleAuthorSelection}
              className="mr-2"
            />
            {author}
          </label>
        ))}
      </details>
          {
            auth.isAuthenticated &&
      <Button color="error" variant="contained" onClick={handleSavePreferences}>
        Save
      </Button>}
    </section>
  );
};

export default UserPreferenceComponent;
