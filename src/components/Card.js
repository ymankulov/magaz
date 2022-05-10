import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/fontawesome-free"

const Card = ({product}) => {
    return (
        <div className=" basis-1/4 p-5 ">
            <div className=" max-w-sm rounded overflow-hidden shadow-lg ">
                <div className="h-1/2">
                    <img className="w-full" src={product.image} alt="Sunset in the mountains"/>
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{product.title}</div>
                    <p className="text-gray-700 text-base">
                        {product.description}
                    </p>
                    g
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#платья</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#магазин-одежды</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#весна</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#скидки</span>
                </div>
            </div>
        </div>
    );
};

export default Card;