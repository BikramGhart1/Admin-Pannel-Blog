import React from "react";

function CreatePost() {
    return (
        <form className="flex-1 p-10">
            <div>
                <div>
                    <input type="text" name="title" id="title" placeholder="Title" className="w-full border-b border-fuchsia-400 p-1 mb-4 outline-none"/>
                </div>
                <div className="mb-4 flex justify-start gap-x-8">
                    <input type="submit" value="Publish" className="bg-fuchsia-700 rounded-lg p-2 text-white cursor-pointer active:bg-fuchsia-800 hover:opacity-90"/>
                    <input type="button" value='Preview' className="bg-gray-200 rounded-lg p-2 text-black cursor-pointer active:bg-gray-400 active:text-gray-800 hover:opacity-70"/>
                </div>
            </div>
            <div>
                <textarea name="blogContent" id="blogContent" className="w-full min-h-svh border border-solid border-gray-400 p-4 outline-none"></textarea>
            </div>
        </form>
    )
}

export default React.memo(CreatePost);