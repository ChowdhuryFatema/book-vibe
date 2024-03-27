/* eslint-disable react/prop-types */

import {ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getStoredBooks } from '../utlis/localStorage';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const PagesToRead = () => {

    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedReadBooks = getStoredBooks()
        if (books.length) {

            const storedCart = []
            for (let id of storedReadBooks) {
                const book = books.find(b => b.bookId == id)
                if (book) {
                    storedCart.push(book)
                }
            }
            setReadBooks(storedCart);
        }
    }, [books])


    return (
        <div className='flex flex-col justify-center items-center mx-5'>
            <div  style={{ width: '100%', height: 350 }} className='max-w-3xl mx-auto p-5 lg:p-10 mt-5 rounded-xl bg-[#13131308]'>
            <ResponsiveContainer>
                    <BarChart
                        data={readBooks}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="bookName" />
                        <YAxis />
                        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {readBooks.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                        <Tooltip />
                        <Legend />
                    </BarChart>
                    </ResponsiveContainer>
            </div>
        </div>

    );
};


export default PagesToRead;



