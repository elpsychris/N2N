import React, { useState, useEffect } from "react";
import axios from "axios";

const snkApi = "https://sonako.codes:8080"
const useEndpoint = (req) => {
    const [res, setRes] = useState({
        data: null,
        complete: false,
        pending: false,
        error: false
    })

    useEffect(() => {
        async function doFetch() {
            setRes({
                data: null,
                pending: true,
                error: false,
                complete: false
            });

            console.log(req)
            axios(req)
                .then(res =>
                    setRes({
                        data: res.data,
                        pending: false,
                        error: false,
                        complete: true
                    })
                )
                .catch(() =>
                    setRes({
                        data: null,
                        pending: false,
                        error: true,
                        complete: true
                    })
                )
        }

        doFetch()
    }, [req.url]);
    return res;
}

function genReq(url = "/", base = snkApi, method = "GET") {
    return {
        method: method,
        url: `${base}${url}`
    }
}

export { useEndpoint, genReq }