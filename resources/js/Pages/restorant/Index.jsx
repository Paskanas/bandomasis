import axios from "axios";
import React, { useState } from "react";
const Index = (props) => {
    const [restorants, setRestorants] = useState(props.restorants);

    const deleteRestorant = (restorant, i) => {
        const url = props.deleteUrl.replace("#", restorant.id);

        axios.delete(url, restorant).then((res) => {
            const a = [...restorants];
            console.log(a);
            console.log(i);
            a.splice(i, 1);
            console.log(a);
            setRestorants(a);
        });
    };

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            City
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Address
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Working time
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {restorants.map((restorant, i) => (
                        <tr
                            key={i}
                            className="bg-white border-b dark:bg-stone-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                            <th
                                scope="row"
                                className="py-4 px-6 font-medium text-gray-700 whitespace-nowrap dark:text-slate-800"
                            >
                                {restorant.name}
                            </th>
                            <td className="py-4 px-6">{restorant.city}</td>
                            <td className="py-4 px-6">{restorant.address}</td>
                            <td className="py-4 px-6">
                                {restorant.open_time}
                                {"-"}
                                {restorant.close_time}
                            </td>
                            <td className="py-4 px-6 text-right">
                                <a
                                    href={props.editUrl.replace(
                                        "#",
                                        restorant.id
                                    )}
                                    // onClick={() => edit(restorant)}
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Edit
                                </a>
                                <button
                                    onClick={() =>
                                        deleteRestorant(restorant, i)
                                    }
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-3"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export { Index };
