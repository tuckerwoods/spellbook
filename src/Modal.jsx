import React from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

function Modal({spell, onClose }) {
    return (
    <Dialog open={!!spell} onClose={onClose} className="relative z-10">
        <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel transition className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold text-gray-900">{spell.name}</DialogTitle>
                                <div className="mt-2">
                                        <p className="text-sm text-gray-700 capitalize">{spell.type}</p>
                                        <p className="text-sm text-gray-700 capitalize">{spell.classes.join(", ")}</p>
                                    <div class=" mt-1 flex justify-between items-start">
                                        <div class="flex-col text-left">
                                            <p className="text-sm text-gray-700"><strong>Casting Time: </strong>{spell.casting_time}</p>
                                            <p className="text-sm text-gray-700"><strong>Range: </strong>{spell.range}</p>
                                        </div>
                                        <div class="flex-col text-right">
                                            <p className="text-sm text-gray-700"><strong>Components: </strong>{spell.components.raw}</p>
                                            <p className="text-sm text-gray-700"><strong>Duration: </strong>{spell.duration}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="mt-2 text-sm text-gray-700">{spell.description}</p>
                                    {spell.levelIncrease ? ( <p className="mt-2 text-sm text-gray-700"><strong>At Higher Levels.</strong> {spell.levelIncrease}</p>) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" onClick={onClose} className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">Close</button>
                        <button type="button" data-autofocus onClick={onClose} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Add To Spellbook</button>
                    </div>
                </DialogPanel>
            </div>
        </div>
    </Dialog>
    )
}

export default Modal;