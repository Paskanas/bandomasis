import axios from "axios";
import React, { useEffect, useState } from "react";
const Edit = (props) => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [openTime, setOpenTime] = useState("");
    const [closeTime, setCloseTime] = useState("");

    useEffect(() => {
        setName(props.restorant.name);
        setCity(props.restorant.city);
        setAddress(props.restorant.address);
        setOpenTime(props.restorant.open_time);
        setCloseTime(props.restorant.close_time);
    }, [
        props.restorant.name,
        props.restorant.city,
        props.restorant.address,
        props.restorant.openTime,
        props.restorant.closeTime,
    ]);

    const save = () => {
        const url = props.updateUrl.replace("#", props.restorant.id);
        axios
            .put(url, {
                name: name,
                city: city,
                address: address,
                openTime: openTime,
                closeTime: closeTime,
            })
            .then((_) => {
                // props.setPage("restorantsIndex");
            });
    };

    return (
        <div className="flex justify-center items-center">
            <div
                className="w-72 dark:bg-gray-200 p-5 rounded-md"
                // method="post"
            >
                <div className="mb-6">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Your name
                    </label>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter name"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="city"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Your city
                    </label>
                    <input
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        type="text"
                        name="city"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter city"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="address"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Your address
                    </label>
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        type="text"
                        name="address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter address"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="open_time"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Open time
                    </label>
                    <input
                        onChange={(e) => setOpenTime(e.target.value)}
                        value={openTime}
                        type="time"
                        name="open_time"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Choose open time"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="close_time"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Close time
                    </label>
                    <input
                        onChange={(e) =>
                            e.target.value ? setCloseTime(e.target.value) : ""
                        }
                        value={closeTime}
                        type="time"
                        name="close_time"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Choose close time"
                        required
                    />
                </div>
                <button
                    // type="submit"
                    onClick={() => save()}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export { Edit };
