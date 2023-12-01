import React, {useState} from 'react'

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className='max-w-sm rounded overflow-hidden mx-auto my-10'>
            <form onSubmit={onSubmit} className='w-full max-w-sm'>
                <div>
                <input onChange={e => {setText(e.target.value)}} />
                <button className='flex-shrink-0'>
                    Search
                </button>
                </div>
            </form>
        </div>
  )
}

export default ImageSearch;