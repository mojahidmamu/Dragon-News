import React, { useEffect, useState } from 'react';
import CategorySection from '../CategorySection/CategorySection';
import NewsSection from '../NewsSection/NewsSection';
import { data } from 'react-router';

const Home = () => {
    const [categories, setCategories] =  useState([]);
    const [selectedCategory, setSelectedCategory] =  useState("01");
    const [news, setNews] =  useState([]);
    const [loading, setLoading] =  useState(false);
    // const [isLoggedIn, setIsLoggedIn] =  useState(false);

     useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
        const data = await response.json();
        if (data.status) {
          setCategories(data.data.news_category);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

    
    return (
         <main className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <CategorySection></CategorySection>
                <NewsSection></NewsSection>
            </div>
         </main>
    );
};

export default Home;