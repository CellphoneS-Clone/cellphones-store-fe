
import React, { useState, useEffect } from 'react';
import Input from '../../input/Input';
import Select from '../../../common/Select';
import { getProvinces, getDistrictsByProvinceCode } from '@/services/locationService';
import { Province, District } from '@/types/location';

interface SelectOption {
  value: number | string;
  label: string;
}

const DeliveryToYourDoor = () => {
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [selectedProvince, setSelectedProvince] = useState<SelectOption | null>(null);
    const [selectedDistrict, setSelectedDistrict] = useState<SelectOption | null>(null);
    const [loading, setLoading] = useState(false);

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
            if (selectedProvince) {
                setLoading(true);
                try {
                    const data = await getDistrictsByProvinceCode(Number(selectedProvince.value));
                    setDistricts(data);
                } catch (error) {
                    console.error('Error fetching districts:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                setDistricts([]);
                setSelectedDistrict(null);
            }
        };

        fetchDistricts();
    }, [selectedProvince]);

    const handleProvinceChange = (option: SelectOption) => {
        setSelectedProvince(option);
        setSelectedDistrict(null);
    };

    const handleDistrictChange = (option: SelectOption) => {
        setSelectedDistrict(option);
    };

    const provinceOptions = provinces.map(province => ({
        value: province.code,
        label: province.name
    }));

    const districtOptions = districts.map(district => ({
        value: district.code,
        label: district.name
    }));

    return (
        <div className='grid grid-cols-2 gap-8 mb-4'>
                            <Input label='Tên người nhận' />
                            <Input label='Giao hàng tận nơi' />
            
            
            
            
            <Select
                label="TỈNH/THÀNH PHỐ"
                placeholder="Chọn tỉnh/thành phố"
                options={provinceOptions}
                value={selectedProvince}
                onChange={handleProvinceChange}
                disabled={loading}
            />
            
            <Select
                label="QUẬN/HUYỆN"
                placeholder="Chọn quận/huyện"
                options={districtOptions}
                value={selectedDistrict}
                onChange={handleDistrictChange}
                disabled={loading || !selectedProvince}
            />
            <Input label='PHƯỜNG/XÃ' />
            <Input label='Số nhà, tên đường' />
            
            <div className='col-span-2'>
                <Input label='Ghi chú khác nếu có' />
            </div>
        </div>
    );
};

export default DeliveryToYourDoor;