"use client";
import { useState, useEffect } from "react";
import PropertyCard from "@/components/PropertyCard";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";

const SavedPropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const res = await fetch("/api/bookmarks");

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          console.log(res.statusText);
          toast.error("Failed to fetch Properties");
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch Properties");
      } finally {
        setLoading(false);
      }
    };

    fetchSavedProperties();
  }, []);

  console.log(properties);

  return <div>SavedPropertiesPage</div>;
};

export default SavedPropertiesPage;
