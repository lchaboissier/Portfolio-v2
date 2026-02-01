import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ImageGalleryProps {
    images: string[];
    isOpen: boolean;
    onClose: () => void;
    projectTitle: string;
}

export function ImageGallery({ images, isOpen, onClose, projectTitle }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Reset index when gallery opens
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                goToPrevious();
            } else if (e.key === 'ArrowRight') {
                goToNext();
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative w-full max-w-6xl max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4 px-4">
                            <div className="flex-1">
                                <h3 className="text-white text-xl font-bold">{projectTitle}</h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    {currentIndex + 1} / {images.length}
                                </p>
                            </div>

                            {/* Bouton fermer */}
                            <motion.button
                                onClick={onClose}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                                aria-label="Fermer la galerie"
                            >
                                <X className="text-white" size={24} />
                            </motion.button>
                        </div>

                        {/* Image principale */}
                        <div className="relative flex-1 flex items-center justify-center overflow-hidden rounded-lg bg-black/50">
                            <AnimatePresence mode="wait" custom={currentIndex}>
                                <motion.img
                                    key={currentIndex}
                                    src={images[currentIndex]}
                                    alt={`${projectTitle} - Image ${currentIndex + 1}`}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.3 }}
                                    className="max-w-full max-h-[70vh] object-contain"
                                />
                            </AnimatePresence>

                            {/* Navigation gauche/droite */}
                            {images.length > 1 && (
                                <>
                                    <motion.button
                                        onClick={goToPrevious}
                                        whileHover={{ scale: 1.1, x: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
                                        aria-label="Image précédente"
                                    >
                                        <ChevronLeft className="text-white" size={28} />
                                    </motion.button>

                                    <motion.button
                                        onClick={goToNext}
                                        whileHover={{ scale: 1.1, x: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
                                        aria-label="Image suivante"
                                    >
                                        <ChevronRight className="text-white" size={28} />
                                    </motion.button>
                                </>
                            )}
                        </div>

                        {/* Miniatures */}
                        {images.length > 1 && (
                            <div className="flex gap-2 mt-4 overflow-x-auto px-4 pb-2 justify-center">
                                {images.map((image, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                            index === currentIndex
                                                ? 'border-[#6366f1] ring-2 ring-[#6366f1]/50'
                                                : 'border-white/20 hover:border-white/40'
                                        }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`Miniature ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                        {index === currentIndex && (
                                            <div className="absolute inset-0 bg-[#6366f1]/20" />
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        )}

                        {/* Indications clavier */}
                        <div className="hidden md:flex justify-center gap-4 mt-4 text-gray-400 text-xs">
                            <span>← → Navigation</span>
                            <span>•</span>
                            <span>Echap - Fermer</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
