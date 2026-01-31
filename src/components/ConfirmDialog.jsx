import { useState, useEffect } from 'react';
import { X, AlertTriangle } from 'lucide-react';

const ConfirmDialog = ({
  isOpen,
  onConfirm,
  onCancel,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger',
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      // Small delay to trigger entrance animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setIsVisible(false);
    setTimeout(() => {
      setShouldRender(false);
      onCancel();
    }, 250);
  };

  if (!shouldRender) return null;

  const variantStyles = {
    danger: {
      icon: 'text-red-500 bg-red-500/10',
      button: 'bg-red-500 hover:bg-red-600 text-white',
    },
    warning: {
      icon: 'text-yellow-500 bg-yellow-500/10',
      button: 'bg-yellow-500 hover:bg-yellow-600 text-black',
    },
  };

  const styles = variantStyles[variant] || variantStyles.danger;
  const showDialog = isVisible && !isClosing;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        opacity: showDialog ? 1 : 0,
        transition: 'opacity 250ms ease-out',
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        style={{
          opacity: showDialog ? 1 : 0,
          transition: 'opacity 250ms ease-out',
        }}
        onClick={handleClose}
      />

      {/* Dialog */}
      <div
        className="relative bg-[#0C120F] border border-white/10 rounded-[24px] p-6 max-w-sm w-full mx-4 shadow-2xl"
        style={{
          opacity: showDialog ? 1 : 0,
          transform: showDialog ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          transition: 'all 250ms ease-out',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#8FA396] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className={`w-12 h-12 rounded-full ${styles.icon} flex items-center justify-center mb-4`}>
          <AlertTriangle className="w-6 h-6" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-[#8FA396] text-sm mb-6">{message}</p>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleClose}
            className="flex-1 px-4 py-3 bg-[#1A2920] text-white rounded-xl font-bold text-sm hover:bg-[#253d2c] transition-colors border border-white/5"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`flex-1 px-4 py-3 rounded-xl font-bold text-sm transition-colors ${styles.button}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
