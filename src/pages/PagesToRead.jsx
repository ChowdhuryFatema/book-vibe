
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
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




const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-white px-3 rounded-sm border shadow-2xl">

                <p className="label font-semibold">{`${label}`}</p>
                <p className="label text-teal-500 font-semibold">{`${payload[0].name} : ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
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
        <div className='flex flex-col justify-center items-center '>
            <div className='max-w-7xl mx-auto p-10 mt-5 rounded-xl bg-[#13131308]'>
                <BarChart
                    width={900}
                    height={400}
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
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                </BarChart>
            </div>
        </div>

    );
};


export default PagesToRead;