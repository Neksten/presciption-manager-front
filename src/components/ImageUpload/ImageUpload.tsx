import { Controller, useWatch } from 'react-hook-form';
import { useState } from 'react';

import styles from './upload.module.css';
import Upload from '../../assets/Upload.tsx';
import { getImageUrl } from '../../helpers/getImageUrl.ts';

interface ImageUploadProps {
  control: any;
  setValue: (name: string, value: any) => void;
  name: string;
  error?: string;
  text: string;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  control,
  setValue,
  className,
  name,
  text,
  error,
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const getPreview = (img: string | File) => {
    if (String(img).includes('blob')) {
      return img;
    }

    return getImageUrl(img);
  };

  const imgPreview = useWatch({ control, name });

  return (
    <div className={className}>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field: { onChange, ref } }) => (
          <label className={styles.label}>
            {text}
            <input
              type="file"
              accept="image/*"
              ref={ref}
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (file) {
                  onChange(file);
                  setValue(name, file);
                  setPreview(URL.createObjectURL(file));
                } else {
                  console.log('No file selected');
                }
              }}
            />
            <Upload />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </label>
        )}
      />
      {(preview || imgPreview) && (
        <img
          src={getPreview(preview || imgPreview)}
          className={styles.image}
          alt="Preview"
          width="150"
        />
      )}
    </div>
  );
};

export default ImageUpload;
