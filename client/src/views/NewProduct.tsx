import { Link } from "react-router-dom"

export default function NewProduct() {
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">
                    Registrar Producto
                </h2>
                <Link
                    to="/"
                    className="p-3 text-sm font-bold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500"
                >
                    Volver a Productos
                </Link>
            </div>
        </>
    )
}
