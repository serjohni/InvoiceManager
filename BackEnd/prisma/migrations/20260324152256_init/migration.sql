-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "document_type" TEXT,
    "invoice_date" TIMESTAMP(3) NOT NULL,
    "mark" TEXT,
    "series" TEXT,
    "number" TEXT,
    "issuer_vat_number" TEXT,
    "issuer_name" TEXT,
    "recipient_vat_number" TEXT,
    "recipient_name" TEXT,
    "recipient_code" TEXT,
    "project" TEXT,
    "payment_method" TEXT,
    "value_before_discount" DECIMAL(10,2) NOT NULL,
    "discount_amount" DECIMAL(10,2) NOT NULL,
    "net_amount" DECIMAL(10,2) NOT NULL,
    "vat_amount" DECIMAL(10,2) NOT NULL,
    "withholding_amount" DECIMAL(10,2) NOT NULL,
    "fees_or_stamps" TEXT,
    "total_amount" DECIMAL(10,2) NOT NULL,
    "issuer_iban" TEXT,
    "is_paid" BOOLEAN,
    "comments" TEXT,
    "company" TEXT,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
