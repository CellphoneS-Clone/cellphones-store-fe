import React, { useState, useEffect } from 'react';
import Input from '../../input/Input';
import Select from '../../../common/Select';
import { getProvinces, getDistrictsByProvinceCode } from '@/services/locationService';
import { Province, District } from '@/types/location';
import { usePaymentForm } from '@/context/PaymentFormContext';

interface SelectOption {
  value: number | string;
  label: string;
}

const PickUpInStore = () => {
    const { formData, updateDeliveryInfo } = usePaymentForm();
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [loading, setLoading] = useState(false);
    const [storeOptions, setStoreOptions] = useState<SelectOption[]>([]);

    useEffect(() => {
        const fetchProvinces = async () => {
            setLoading(true);
            try {
                const data = await getProvinces();
                setProvinces(data);
            } catch (error) {
                console.error('Error fetching provinces:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProvinces();
    }, []);

    useEffect(() => {
        const fetchDistricts = async () => {
            if (formData.delivery.province) {
                setLoading(true);
                try {
                    const data = await getDistrictsByProvinceCode(Number(formData.delivery.province.value));
                    setDistricts(data);
                } catch (error) {
                    console.error('Error fetching districts:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                setDistricts([]);
            }
        };

        fetchDistricts();
    }, [formData.delivery.province]);

    // Mock store data - in real app this would come from API
    useEffect(() => {
        if (formData.delivery.district) {
            const mockStores = [
                { value: '1', label: 'CellphoneS Nguyễn Văn Cừ - 123 Nguyễn Văn Cừ, Q.5' },
                { value: '2', label: 'CellphoneS Lê Văn Việt - 456 Lê Văn Việt, Q.9' },
                { value: '3', label: 'CellphoneS Vincom Center - 789 Nguyễn Huệ, Q.1' }
            ];
            setStoreOptions(mockStores);
        } else {
            setStoreOptions([]);
        }
    }, [formData.delivery.district]);

    const handleProvinceChange = (option: SelectOption) => {
        updateDeliveryInfo({ 
            province: option,
            district: null,
            storeAddress: ''
        });
    };

    const handleDistrictChange = (option: SelectOption) => {
        updateDeliveryInfo({ 
            district: option,
            storeAddress: ''
        });
    };

    const handleStoreChange = (option: SelectOption) => {
        updateDeliveryInfo({ storeAddress: option.label });
    };

    const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateDeliveryInfo({ note: e.target.value });
    };

    const provinceOptions = provinces.map(province => ({
        value: province.code,
        label: province.name
    }));

    const districtOptions = districts.map(district => ({
        value: district.code,
        label: district.name
    }));

    const selectedStore = storeOptions.find(store => store.label === formData.delivery.storeAddress);

    return (
        <div className='grid grid-cols-2 gap-8 mb-4'>
            <Select
                label="TỈNH/THÀNH PHỐ *"
                // placeholder="Chọn tỉnh/thành phố"
                options={provinceOptions}
                value={formData.delivery.province}
                onChange={handleProvinceChange}
                disabled={loading}
                // required
            />
            
            <Select
                label="QUẬN/HUYỆN *"
                // placeholder="Chọn quận/huyện"
                options={districtOptions}
                value={formData.delivery.district}
                onChange={handleDistrictChange}
                disabled={loading || !formData.delivery.province}
                // required
            />
            
            <div className='col-span-2'>
                <Select
                    label="Chọn địa chỉ cửa hàng *"
                    // placeholder="Chọn cửa hàng gần bạn"
                    options={storeOptions}
                    value={selectedStore || null}
                    onChange={handleStoreChange}
                    disabled={!formData.delivery.district}
                    // required
                />
            </div>
            
            <div className='col-span-2'>
                <Input 
                    label='Ghi chú khác nếu có' 
                    value={formData.delivery.note}
                    onChange={handleNoteChange}
                    // placeholder="Ghi chú thêm về việc nhận hàng"
                />
            </div>
        </div>
    );
};

export default PickUpInStore;