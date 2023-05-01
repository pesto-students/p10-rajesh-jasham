import { useEffect, useState } from 'react';

const useCurrentPageHook = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(value);
    }, [value]);
    return [value, setValue];
};

useCurrentPageHook.propTypes = {};

export default useCurrentPageHook;
