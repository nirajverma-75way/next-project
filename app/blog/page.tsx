"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import style from "./Blog.module.css"
import useRelativeTime from '../hooks/useRelativeTime';
import BlogCard from './blogCard';
import BlogDetail from './blogContent';

export default function Blog() {
    return <BlogDetail />;
}
