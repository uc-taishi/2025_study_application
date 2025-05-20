"use client";
import Link from "next/link";
import { ComponentType } from "react";

export type Column = {
    id: string;
    label: string;
    minWidth?: number;
    align?: "right" | "left" | "center";
    format?: (value: any) => string;
    visiable?: boolean;
};

export type Row = {
    id: string;
    [key: string]: any;
};

export type TableProps = {
    columns: Column[];
    rows: Row[];
    isModal?: boolean;
    component?: ComponentType
};

export default function Table({ columns, rows, isModal, component}: TableProps) {
    return (
        <table className="min-w-full border-collapse border border-gray-300 shadow-sm">
            <thead className="bg-gray-100">
                <tr className="border-b border-gray-300">
                    {columns.map((column) =>
                        column.visiable === false ? null : (
                            <th
                                key={column.id}
                                style={{ minWidth: column.minWidth, textAlign: column.align }}
                                className="p-2 text-left text-sm font-medium text-gray-700"
                            >
                                {column.label}
                            </th>
                        )
                    )}
                </tr>
            </thead>
            <tbody className="bg-white">
                {rows.map((row) => (
                    <tr key={row.id} className="border-b border-gray-300">
                        {columns.map((column) =>
                            column.visiable === false ? null : (
                                <td
                                    key={column.id}
                                    style={{ textAlign: column.align }}
                                    className="p-2 text-sm text-gray-700"
                                >
                                    {isModal && column.id === "link" ? (
                                        <Link href={row[column.id]} className="text-blue-500 hover:underline">
                                            {row[column.id]}
                                        </Link>
                                    ) : column.format ? (
                                        column.format(row[column.id])
                                    ) : (
                                        row[column.id]
                                    )}
                                </td>
                            )
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
