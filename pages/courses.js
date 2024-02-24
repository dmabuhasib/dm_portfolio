import CoursesAll from '@/components/coursesSec/CoursesAll';
import CoursesBanner from '@/components/coursesSec/CoursesBanner';
import Layout from '@/components/layout/Layout';
import React from 'react';

const courses = () => {
  return (
    <Layout>
      <CoursesBanner />
      <CoursesAll />
      
    </Layout>
  );
};

export default courses;
