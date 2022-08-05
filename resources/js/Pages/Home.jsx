import React, { useEffect, useState } from "react";
import Hello from "./Hello";
import { Index as RestorantIndex } from "./restorant/Index";
import { Create as RestorantCreate } from "./restorant/Create";
import { Edit as RestorantEdit } from "./restorant/Edit";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Home(props) {
    const [page, setPage] = useState("");

    useEffect(() => {
        setPage(props.page);
    }, [props.page]);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {props.title}
                </h2>
            }
        >
            <Head title={props.title} />
            {/* <Hello param="param" /> */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {page === "restorantsIndex" ? (
                        <RestorantIndex
                            restorants={props.restorants}
                            editUrl={props.editUrl}
                            deleteUrl={props.deleteUrl}
                        />
                    ) : (
                        ""
                    )}

                    {page === "restorantCreate" ? (
                        <RestorantCreate saveUrl={props.saveUrl} />
                    ) : (
                        ""
                    )}
                    {page === "restorantEdit" ? (
                        <RestorantEdit
                            updateUrl={props.updateUrl}
                            restorant={props.restorant}
                            setPage={setPage}
                        />
                    ) : (
                        ""
                    )}
                    {/* <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>
                    </div> */}
                </div>
            </div>
        </Authenticated>
    );
}
