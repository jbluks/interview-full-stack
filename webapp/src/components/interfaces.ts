import type { DraggableProvided } from 'react-beautiful-dnd';

export interface Order {
    OrderID: number;
    CustomerID: number;
    ProductID: number;
    OrderStatus: string;
}

export interface OrderData {
  Queued: Order[],
  InProgress: Order[],
  QA: Order[],
}

export interface Product {
    ProductID: number;
    ProductName: string;
    ProductPhotoURL: string;
    ProductStatus: 'Active' | 'InActive';
}

export interface ProductData {
  Active: Product[],
  InActive: Product[],
}

export interface DraggableItemProps extends Order{
    draggableProvided: DraggableProvided;
    removeOrder: (order: Order) => void;
}

export interface DraggableListProps {
    ID: string;
    listTitle: string;
    removeOrder: (order: Order) => void;
    items: Order[];
};

export interface HeaderLink {
    label: string;
    url: string;
}

export interface HeaderProps {
    links: HeaderLink[];
}

export interface ProductCardProps {
    id: number;
    name: string;
    photoUrl: string;
    status: 'Active' | 'InActive';
}