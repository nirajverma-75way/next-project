"use client";
import { useState } from "react";

type DialogKey = string;
type DialogState = Record<DialogKey, boolean>;

// Global state setter function
let globalSetOpen: ((updater: (prev: DialogState) => DialogState) => void) | null = null;
// Global state storage
let globalIsOpen: DialogState = {};

export const useDialog = (dialogKey: DialogKey) => {
    const showDialog = () => {
        if (globalSetOpen) {
            globalSetOpen((prev) => ({ ...prev, [dialogKey]: true }));
        }
    };

    const closeDialog = () => {
        if (globalSetOpen) {
            globalSetOpen((prev) => ({ ...prev, [dialogKey]: false }));
        }
    };

    const isOpen = () => globalIsOpen[dialogKey] ?? false;

    return { showDialog, closeDialog, isOpen };
};

export const DialogStateProvider = () => {
    const [openDialogs, setOpenDialogs] = useState<DialogState>({});

    // Assign global setter and state
    globalSetOpen = setOpenDialogs;
    globalIsOpen = openDialogs;

    return openDialogs;
};
